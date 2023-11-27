export default function debounce(
    func: CallableFunction,
    timeout: number = 300,
  ) {
    let timer = setTimeout(() => {})
  
    return <T>(...args: T[]) => {
      clearTimeout(timer)
  
      timer = setTimeout(() => {
        func(...args)
      }, timeout)
    }
  }