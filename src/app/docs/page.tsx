export default function Docs(
    {params}:
    {params:{slug: string[]}}
    ) {
        if(params.slug?.length === 2){
            return<div>Docs is having feature: {params.slug[0]} and content: {params.slug[1]}</div>
        }
        else if(params.slug?.length === 1){
            return<div>Docs is having feature: {params.slug[0]}</div>
        }
        else {
            return<div>Docs</div>
        }
}