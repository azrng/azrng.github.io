// DOM 元素
const apiUrlInput = document.getElementById('apiUrl');
const headersContainer = document.getElementById('headersContainer');
const addHeaderBtn = document.getElementById('addHeader');
const requestBodyTextarea = document.getElementById('requestBody');
const sendRequestBtn = document.getElementById('sendRequest');
const cancelRequestBtn = document.getElementById('cancelRequest');
const clearResponseBtn = document.getElementById('clearResponse');
const responseContent = document.getElementById('responseContent');
const copyResponseBtn = document.getElementById('copyResponse');
const loadingElement = document.querySelector('.loading');

// 全局变量
let currentController = null;
let isRequestInProgress = false;

// 初始化
function init() {
    // 从 localStorage 加载保存的配置
    loadSavedConfig();
    
    // 添加事件监听器
    addHeaderBtn.addEventListener('click', addHeaderRow);
    sendRequestBtn.addEventListener('click', sendRequest);
    cancelRequestBtn.addEventListener('click', cancelRequest);
    clearResponseBtn.addEventListener('click', clearResponse);
    copyResponseBtn.addEventListener('click', copyResponse);
    
    // 添加初始的请求头行
    addHeaderRow();
}

// 添加请求头行
function addHeaderRow() {
    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';
    headerRow.innerHTML = `
        <input type="text" placeholder="Key" class="header-key">
        <input type="text" placeholder="Value" class="header-value">
        <button class="remove-header">删除</button>
    `;
    
    headerRow.querySelector('.remove-header').addEventListener('click', () => {
        if (headersContainer.children.length > 1) {
            headerRow.remove();
        }
    });
    
    headersContainer.appendChild(headerRow);
}

// 获取请求头
function getHeaders() {
    const headers = {};
    const headerRows = headersContainer.querySelectorAll('.header-row');
    
    headerRows.forEach(row => {
        const key = row.querySelector('.header-key').value.trim();
        const value = row.querySelector('.header-value').value.trim();
        if (key && value) {
            headers[key] = value;
        }
    });
    
    return headers;
}

// 显示/隐藏 loading
function toggleLoading(show) {
    loadingElement.classList.toggle('active', show);
}

// 将 Unicode 转义序列转换为 UTF-8
function unicodeToUtf8(str) {
    return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
    });
}

// 发送请求
async function sendRequest() {
    if (isRequestInProgress) return;
    
    const url = apiUrlInput.value.trim();
    if (!url) {
        alert('请输入API地址');
        return;
    }
    
    try {
        const body = requestBodyTextarea.value.trim();
        if (body) {
            JSON.parse(body); // 验证JSON格式
        }
    } catch (e) {
        alert('请求体JSON格式无效');
        return;
    }
    
    // 清空之前的响应内容
    clearResponse();
    
    isRequestInProgress = true;
    updateButtonStates();
    toggleLoading(true);
    
    // 创建新的 AbortController
    currentController = new AbortController();
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'text/event-stream',
                ...getHeaders()
            },
            body: requestBodyTextarea.value,
            signal: currentController.signal
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 开始接收流式响应时关闭 loading
        toggleLoading(false);
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';
        
        while (true) {
            const {value, done} = await reader.read();
            if (done) break;
            
            buffer += decoder.decode(value, {stream: true});
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            
            for (const line of lines) {
                if (line.trim()) {
                    // 转换 Unicode 为 UTF-8
                    const utf8Text = unicodeToUtf8(line);
                    appendResponse(utf8Text);
                }
            }
        }
        
        // 处理剩余的buffer
        if (buffer.trim()) {
            const utf8Text = unicodeToUtf8(buffer);
            appendResponse(utf8Text);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            appendResponse('\n[请求已取消]');
        } else {
            appendResponse(`\n[错误] ${error.message}`);
        }
    } finally {
        isRequestInProgress = false;
        currentController = null;
        updateButtonStates();
        // 确保在任何情况下都关闭 loading
        toggleLoading(false);
    }
}

// 取消请求
function cancelRequest() {
    if (currentController) {
        currentController.abort();
    }
}

// 清空响应
function clearResponse() {
    responseContent.innerHTML = '';
}

// 复制响应内容
function copyResponse() {
    const text = responseContent.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 添加响应内容
function appendResponse(text) {
    const div = document.createElement('div');
    div.textContent = text;
    responseContent.appendChild(div);
    
    // 自动滚动到底部
    responseContent.scrollTop = responseContent.scrollHeight;
}

// 更新按钮状态
function updateButtonStates() {
    sendRequestBtn.disabled = isRequestInProgress;
    cancelRequestBtn.disabled = !isRequestInProgress;
}

// 保存配置到 localStorage
function saveConfig() {
    const config = {
        url: apiUrlInput.value,
        headers: Array.from(headersContainer.querySelectorAll('.header-row')).map(row => ({
            key: row.querySelector('.header-key').value,
            value: row.querySelector('.header-value').value
        })),
        body: requestBodyTextarea.value
    };
    
    localStorage.setItem('aiStreamViewerConfig', JSON.stringify(config));
}

// 从 localStorage 加载配置
function loadSavedConfig() {
    const savedConfig = localStorage.getItem('aiStreamViewerConfig');
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        apiUrlInput.value = config.url || '';
        requestBodyTextarea.value = config.body || '';
        
        // 清空现有的请求头
        headersContainer.innerHTML = '';
        
        // 添加保存的请求头
        if (config.headers && config.headers.length > 0) {
            config.headers.forEach(header => {
                const headerRow = document.createElement('div');
                headerRow.className = 'header-row';
                headerRow.innerHTML = `
                    <input type="text" placeholder="Key" class="header-key" value="${header.key}">
                    <input type="text" placeholder="Value" class="header-value" value="${header.value}">
                    <button class="remove-header">删除</button>
                `;
                
                headerRow.querySelector('.remove-header').addEventListener('click', () => {
                    if (headersContainer.children.length > 1) {
                        headerRow.remove();
                    }
                });
                
                headersContainer.appendChild(headerRow);
            });
        } else {
            addHeaderRow();
        }
    }
}

// 添加自动保存配置的事件监听器
apiUrlInput.addEventListener('change', saveConfig);
requestBodyTextarea.addEventListener('change', saveConfig);
headersContainer.addEventListener('change', saveConfig);

// 初始化应用
init(); 