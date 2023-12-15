import React from 'react'

const Contact = () => {
  	return (
		<>
			<h2 className='center p-2'>Contact Me!</h2>
			<div className='flex flex-center'>
				<form>
					<div>
						<input type="text" name="fullname" placeholder='Provide your fullname...'/>
					</div>
					<div>
						<input type="email" name="email" placeholder='Your email address'/>
					</div>
					<div>
						<textarea placeholder='Your message...'></textarea>
					</div>
					<div>
						<button type="submit">Send Message</button>
					</div>
				</form>
			</div>
		</>	
  	)
}

export default Contact