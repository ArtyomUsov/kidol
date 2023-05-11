import React, {useEffect, useState} from "react";

export function ButtonScrollTop() {

    const [displayBlock, setDisplayBlock] = useState("");
      
    useEffect(() => {
        window.addEventListener("scroll", isdisplayBlock);
        return () => {
        window.removeEventListener("scroll", isdisplayBlock);
        };
    }, []);
      
    const isdisplayBlock = () => {
        const scrollTop = window.scrollY;
        const displayBlockClass = scrollTop >= 300 ? "displayBlock" : "";
        setDisplayBlock(displayBlockClass);
    };
      
    const classes = ["scroll-to-top", displayBlock];

    return (
            <div className={classes.join(' ')} onClick = { () => {window.scrollTo({top: 0, behavior: "smooth",})}}>
                <span className="fa fa-angle-double-up">
                </span>
            </div>
    )
}