import {GraphQLNonNull,GraphQLID} from 'graphql';
import {userType,userInputType} from '../../types/user';
import UserModel from '../../../models/user';

export default {
	type:userType,
	args:{
		id:{
			name:"id",
			type:new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root,params){
		const removeUser=UserModel.findByIdAndRemove(params.id);
		
		if(!removeUser){
			throw new Error('user removing error');
		}

		return removeUser;
	}
}