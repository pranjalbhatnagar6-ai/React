import avatarImg from '../assets/img_avatar.png'
import { useState } from 'react';
function Dynamic() {
    const [cardStyle, setCardStyle] = useState(
        {
            border: "1px solid #ccc",
            width: "200px",
            boxShadow: "1px 2px 3px 0px #cccccc57",
            margin: "10px",
        }
    )

    const [grid, setGrid] = useState(true)

    const updateTheme = (bgColor,textColor) => {
        setCardStyle({...cardStyle,backgroundColor:bgColor})
    }

    return (
        <>
            <h1 style={{ color: "skyblue" }}>Inline Style in React Js</h1>
            <button onClick={()=>updateTheme('gray','green')} >Gray theme</button>
            <button onClick={()=>updateTheme('white','black')} >Default theme</button>
            <button onClick={()=>setGrid(!grid)} >Toggle</button>
            <div style={{
                display: grid?'flex':'block',
                flexWrap: "wrap",
            }}>
                <div style={cardStyle} >
                    <img style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
                        src={avatarImg} alt="" />
                    <div>
                        <h4>Pranjal Bhatnagar</h4>
                        <p>Senior Software developer</p>
                    </div>
                </div>
                <div style={cardStyle} >
                    <img
                        style={{ width: "200px" }}
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

export default Dynamic;