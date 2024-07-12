function replaceURL(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/https:\/\/old\.subdomain\.domain/g, 'https:\/\/new.subdomain.domain');
    } else {
        for (let child of node.childNodes) {
            replaceURL(child);
        }
    }
}

function replaceAttr(node) {
    if (node.attributes) {
        for (let attr of node.attributes) {
            if (attr.value.includes('https://old.subdomain.domain')) {
                attr.value = attr.value.replace(/https:\/\/old\.subdomain\.domain/g, 'https:\/\/new.subdomain.domain');
            }
        }
    }
    for (let child of node.childNodes) {
        replaceAttr(child);
    }
}

function f() {
    replaceURL(document.documentElement);  
    replaceAttr(document.documentElement); 
}

f();
