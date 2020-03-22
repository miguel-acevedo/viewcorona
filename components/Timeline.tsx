import * as React from 'react'
import TimelineItem from '../components/TimelineItem'
import { Event } from '../interfaces'

type Props = {
    items: Event[]
}

const Timeline: React.FunctionComponent<Props> = ({ items }) => (
<section className="timeline">
    <div className="container">
        {items.map(item => (
        <div key={item.id}>
            <TimelineItem data={item} />
        </div>
        ))}
    </div>
</section>
)

export default Timeline