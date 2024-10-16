export function debounce(func: any, delay: number) {
    var timer: any
    return function (event: any) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(func, delay, event)
    }
}
