import style from './UserProfile.module.css'

function UserProfile() {
  return (
    <div>
      <div>
        <h1 className={style.heading} >Style with CSS Module</h1>
        <div className={style.card} >
          <img className={style.img} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className={style.textWrap} >
            <h4>Pranjal Bhatnagar</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;