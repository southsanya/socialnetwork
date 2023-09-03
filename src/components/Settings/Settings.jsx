import classes from './Settings.module.css'

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
        <div className={classes.settingsWrapper}>
            <div className={classes.settingsContainer}>
                <div className={classes.title}>
                    Settings
                </div>
                <div className={classes.list}>
                    <div className={classes.countWrapper}>
                        <div>Try night mode</div>
                        <button className={classes.button}>Try</button>
                    </div>
                    <div className={classes.countWrapper}>
                        <div>Mute notifications</div>
                        <button className={classes.button}>Try</button>
                    </div>
                    <div className={classes.countWrapper}>
                        <div>Get me as employee</div>
                        <button className={classes.button}>Try</button>
                    </div>
                </div>
                <div className={classes.titleWrapper}>
                    Даний веб-додаток написаний самостійно по безкоштовних курсах на Ютубі. Подальший розвиток проекта триває, чекайте нових оновлень.
                </div>
            </div>
        </div>
    )
}

export default Settings;