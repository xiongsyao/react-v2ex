/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react'
import { Format } from '../utils/Format'
import Loading from './Loading'
import BackToTop from "./BackTop";


//加载对应话题下的详情与回复
class Topic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {topic,replies} = this.props;

		//获取回复列表
		let repliesItems = [];
		if(replies.length>0) {
		repliesItems = replies.map((reply,i) => {
			return (
				<div key={i} className="reply-container">
					<div className="reply-avatar"><img src={reply.member.avatar_mini}></img></div>
					<div className="reply-content">
						<div><span>{reply.member.username}&nbsp;&nbsp;{Format.date(reply.last_modified)}</span></div>
						<div
							dangerouslySetInnerHTML={{__html: reply.content_rendered}} className="rendered-content"/>
					</div>
				</div>
			)
		})}

		return (
			<div>
			{topic.member ?
				<div className="topic-container">
					<div className="topic">
						<div className="topic-title">
							<div className="left-info">
								<div><strong>{topic.title}</strong></div>
								<div><span>{topic.member.username}&nbsp;&nbsp;{Format.date(topic.last_modified)}</span></div>
							</div>
							<div className="right-avatar">
								<img src={topic.member.avatar_normal} className="right-avater-img"></img>
							</div>
						</div>
						<div
							dangerouslySetInnerHTML={{__html: topic.content_rendered}} className="rendered-content"/>
					</div>
					{repliesItems}
				</div> : <Loading/> }
				<BackToTop/>
			</div>
		)
	}
}


export default Topic