const debounce = (func: Function, delay: number): Function => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// 使用示例
const handleSearch = (searchQuery: string) => {
  // 发送搜索请求
  console.log(searchQuery);
  
};

const debouncedHandleSearch = debounce(handleSearch, 500);

// 触发搜索请求，仅在用户输入完成后才发送
debouncedHandleSearch("abc"); // 将阻止搜索请求，直到 500 毫秒后
debouncedHandleSearch("abc"); // 将阻止搜索请求，直到 500 毫秒后
debouncedHandleSearch("abc"); // 将阻止搜索请求，直到 500 毫秒后
debouncedHandleSearch("def"); // 将发送搜索请求，因为用户输入已经超过 500 毫秒


