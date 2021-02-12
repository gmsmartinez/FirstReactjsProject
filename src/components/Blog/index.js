import React from "react";
import Title from "../Title";
import Text from "../Text";

function Blog(props) {
    const { title, content } = props;
    return (
        <section>
            <Title title={title} />
            <Text content={content}/>
            
        </section>

        //uso SECTION o div, main, article, <></> (esto es como un div), etc o lo que sea que necesite porque el return debe retornar de un solo elemento (donde dentro puede tener varios elementos o no)
    );

}

export default Blog;