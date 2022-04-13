import '../App.css';

export default function AboutUs() {
    return (
        <>
            <div className='container custAbout'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <h3 className="custHead">About Us</h3>
                        <span className="subTitle"><b> Operating Hours</b></span>
                        <pre>
                            Monday to Friday: 9am to 10pm<br></br>
                            Saturday : 7am to 10pm<br></br>
                            Sunday : Closed<br></br><br></br>

                            Shop will be closed on public holidays and stipulated closure dates

                        </pre>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <img className="image-responsive custImg" src='/Images/about-us.jpg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
