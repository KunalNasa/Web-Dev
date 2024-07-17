export default function Page({ params }) {
    // fetch your blogpost by its slug
    // throw new Error("Error hai");
    let languages = ["python", "JS", "CPP", "C"];
    if(languages.includes(params.slug))
    {
        return <div>My Post : {params.slug}</div>
    }
    else
    {
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
  }