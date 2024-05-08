export const ImageFeatures = (props) => {
    console.log(props);

    return (
        <>
            <h3 key={props.title}>{props.title}</h3>

            <p key={props.discription}>{props.discription}</p>

            {/*
                      <img src={'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg'}style={{float:"right"}}></img> */}

            <img>{Img.value}</img>

        </>

    );
};
