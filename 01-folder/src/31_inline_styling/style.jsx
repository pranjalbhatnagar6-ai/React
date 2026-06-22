import avatarImg from '../assets/img_avatar.png'

function Style() {
    const cardStyle = {
        border: "1px solid #ccc",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px",
    }
    return (
        <>
            <h1 style={{ color: "skyblue" }}>Inline Style in React Js</h1>
            <div style={{
                display:"flex",
                flexWrap:"wrap",
                }}>
                <div style={cardStyle} >
                    <img style={{width:"200px"}} 
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img 
                    style={{width:"200px"}}
                    src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Style;