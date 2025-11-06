import TextBox from "@/src/components/textBox"
export default function ContactMe() {
    return (
        <>
            <TextBox classNamed="firstBox">
                <hr></hr>
                <h2>Contact Me</h2>
                <hr></hr>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <br></br>
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br></br>
                    <br></br>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={3} cols={20}></textarea>
                    <input type="submit" value="Submit"/>
                </form>



            </TextBox>
        </>
    )
}