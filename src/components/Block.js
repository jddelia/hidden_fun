import React from 'react';

const Block = (props) => {
    let btnText = props.isShown ? "Show Less" : "Show More";
    let styles = props.isShown ? (
        {
            height: "400px"
        }
    ) : (
        {
            height: "150px"
        }
    );

    function handleClick() {
        props.onClick("isShown" + String(props.num));
    }

    return (
        <div className="block">
            <div className="content">
                <h2>Lorem Ipsum</h2>
                <p style={styles}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Nam hendrerit nisi sed 
                    sollicitudin pellentesque. Nunc posuere 
                    purus rhoncus pulvinar aliquam. Ut aliquet 
                    tristique nisl vitae volutpat. Nulla aliquet 
                    porttitor venenatis. Donec a dui et dui fringilla 
                    consectetur id nec massa. Aliquam erat volutpat. 
                    Sed ut dui ut lacus dictum fermentum vel tincidunt 
                    neque. Sed sed lacinia lectus. Duis sit amet sodales 
                    felis. Duis nunc eros, mattis at dui ac, convallis 
                    semper risus. In adipiscing ultrices tellus, in suscipit 
                    massa vehicula eu.
                </p>
            </div>

            <button className="btn" onClick={handleClick}>
                {btnText}
            </button>
        </div>
    );
}

export default Block;