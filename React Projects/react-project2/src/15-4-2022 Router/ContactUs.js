import '../App.css';

export default function ContactUs() {
    console.log("contact")
    return (
        <>
            <div className='container'>
                <div className='row'>                 
                    <div className='col-sm-12 col-md-6'>
                        <h3 className="custHead">Contact Us</h3>
                        <span className="subTitle"><b> Address</b></span><br/><br/>
                        # 3 , Tah Ching Road,<br></br>
                        Jurong East,<br/>
                        Singapore – 619 603<br/>
                        Phone : +65 9920XXXX | Hotline : +65 9040XXXX<br/><br/>

                        Email :info@jaks.sg
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <img className="image-responsive custImg" src='/Images/Contact-Us.jpg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
