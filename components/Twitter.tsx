import * as React from 'react'

type Props = {
    data: string[]
}

const Twitter: React.FunctionComponent<Props> = ({ data }) => (
    <div>
        {data.map((item, index) => (
            <blockquote key={index} className="twitter-tweet"><a href={item}>link</a></blockquote>
        ))}
    </div>
)

export default Twitter