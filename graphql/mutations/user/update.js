import {GraphQLNonNull,GraphQLID} from 'graphql';
import {userType,userInputType} from '../../types/user';
import UserModel from '../../../models/user';

export default {
	type:userType,
	args:{
		data:{
			name:"data",
			type:new GraphQLNonNull(userInputType)
		},
		id:{
			name:"id",
			type:new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root,params){
		return UserModel.findByIdAndUpdate(params.id,{$set:{...params.data}}).
		then(data=>UserModel.findById(data.id).exec()).catch(err=>new Error('coudnt update user'));
	}
}