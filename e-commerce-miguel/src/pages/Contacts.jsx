import { useContext } from "react"
import { useRef } from "react"
import { ProductContext } from "../providers/ProductProvider"


function Contacts () {

    const { inquiryHandler, isInquiryCompleted } = useContext(ProductContext)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    

    function inquiryChecker(e) {
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        if(name === "" || email === "" || message === ""){console.log('something in form is empty') 
        return null
        }

            const inquiry = {
                "name": name,
                "email": email,
                "message": message
            }
            inquiryHandler("https://js2-ecommerce-api.vercel.app/api/messages", inquiry)
        }

    return <>
    <form action="" className='form-contact' onSubmit={(e) => inquiryChecker(e)}>
        <h2>GET IN TOUCH WITH US</h2>
            <label htmlFor="name-questions">NAME</label>
            <input ref={nameRef} type="text" id='name-questions'/>
            <label htmlFor="email-questions">EMAIL</label>
            <input ref={emailRef} type="email" id='email-questions'/>
            <label htmlFor="message-questions">MESSAGE</label>
            <textarea ref={messageRef} name="message-textarea" id="message-textare" cols="30" rows="10"></textarea>
            <button>SEND</button>
    {isInquiryCompleted && <div>YOU HAVE SENT THE MESSAGE</div>}
    </form>
    </>
}

export default Contacts