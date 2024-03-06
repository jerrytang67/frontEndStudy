
function runMicrotask(runMicrotask) {
    if (process && typeof process.nextTick === 'function') {
        process.nextTick(runMicrotask)
    }
    else if (typeof MutationObserver === 'function') {
        var observer = new MutationObserver(runMicrotask)
        var textNode = document.createTextNode('0')
        observer.observe(textNode, { characterData: true })
        textNode.data = '1'
    }
    else {
        setTimeout(runMicrotask, 0)
    }
}

