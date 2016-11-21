<div>
	<table class="flatTable">
		<tr class="titleTr">
			<td class="center">List User</td>
		</tr>
	</table>
	<br/>
	<table class="flatTable" ng-show="isLoading">
		<tr>
			<td class="center">Loading.....</td>
		</tr>
	</table>
<!-- 	<table class="flatTable"> -->
<!-- 		<tr class="titleTr"> -->
<!-- 			<td class="center">ID</td> -->
<!-- 			<td class="center">Phone</td> -->
<!-- 			<td class="center">Email</td> -->
<!-- 			<td class="center">Mark1</td> -->
<!-- 			<td class="center">Mark2</td> -->
<!-- 			<td class="center">Average</td> -->
<!-- 			<td class="center">Action</td> -->
<!-- 		</tr> -->
<!-- 		<tr ng-repeat="user in userList"> -->
<!-- 			<td class="center">{{user.name}}</td> -->
<!-- 			<td class="center">{{user.phone}}</td> -->
<!-- 			<td class="center">{{user.email}}</td> -->
<!-- 			<td class="center">{{user.mark1}}</td> -->
<!-- 			<td class="center">{{user.mark2}}</td> -->
<!-- 			<td class="center">{{user.average}}</td> -->
<!-- 			<td class="center"><a href="#/edituser?userId={{user.userId}}">Edit</a> | <a href="#/deleteuser?userId={{user.userId}}">Delete</a></td> -->
<!-- 		</tr> -->
<!-- 		<tr ng-show="!userList.length"> -->
<!-- 			<td class="center">No Records!</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 			<td class="center">&nbsp;</td> -->
<!-- 		<tr> -->
<!-- 	</table> -->
	
<!-- Displaying table using custom directive -->
	<user-details-table info="userList" ng-show="!isLoading"></user-details-table>
</div>
