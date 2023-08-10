// import classes from './Settings.module.css'

const Settings = (props) => {
     let colorMode = false
    let switchColorMode = () => {
        if(colorMode) {
            colorMode = false
        }
        else {
            colorMode = true
        }
    }
    return (
        <div>
            <div>
                {
                    props.colorMode
                    ? <button onClick={() => {switchColorMode()}}>Try Day Mode!</button>
                    : <button onClick={() => {switchColorMode()}}>Try Night Mode!</button>
                }
            </div>
        </div>
    )
}

export default Settings;