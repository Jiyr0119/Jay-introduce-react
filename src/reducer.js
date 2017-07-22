var defaultState = {
	articles:[],
	title:"",
	time:"",
	count:"",
	mp3:"",
	content:"",
	msg:[],
	footerItems:[],
	move:[]
}

export default function(state=defaultState,action){
	if(action.type == "ADD_CONTENT_SUCC"){
		
		return Object.assign({},state,{
			articles:action.text
		})
		
	}
	
	if(action.type == "ADD_DETAIL_SUCC"){
		return Object.assign({},state,{
			title:action.title,
			time:action.time,
			count:action.count,
			mp3:action.mp3,
			content:action.content
		})
	}
	
	if(action.type == "ADD_MSG_SUCC"){
		return Object.assign({},state,{
			msg:[...state.msg,action.text]
		})
	}
	
	
	if(action.type == "ADD_FOOTER"){
		return Object.assign({},state,{
			footerItems:action.text
		})
	}
	
	
	if(action.type == "ADD_MOVE_IMG"){
		return  Object.assign({},state,{
			move:[...action.text]
		})
	}
	return Object.assign({},state)
}
