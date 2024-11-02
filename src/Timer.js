import { useEffect, useRef } from "react"
import CircularTimerProgressBar from "circular-timer-progress-bar"

const Timer = () => {
    const progressBarRef = useRef(null)
  
    useEffect(() => {
      if (progressBarRef.current) {
        new CircularTimerProgressBar(
          {
            container: progressBarRef.current,
            widthContainer: 300,
            heightContainer: 200,
            strokeWidth: 20,
            colorContainer: "#050b20",
            colorPath: "#2c2c2c",
            colorText: "#2c2c2c",
            fontFamily: "Varela Round",
            nDecimals: 0,
          },
          0,
        ).run(300000)
      }
    }, [])
  
    return <svg ref={progressBarRef} />
  }
  
  export default Timer