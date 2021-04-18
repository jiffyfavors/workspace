export default (context, inject) => {
	const generateRef = () =>{
		 const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let result = ''
            for (let i = 8; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
            return result
	}
	inject('generateRef', generateRef)
		context.$generateRef = generateRef
}