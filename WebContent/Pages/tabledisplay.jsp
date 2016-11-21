<table class="flatTable">
	<tr class="titleTr">
		<td class="center">ID</td>
		<td class="center">Phone</td>
		<td class="center">Email</td>
		<td class="center">Mark1</td>
		<td class="center">Mark2</td>
		<td class="center">Average</td>
		<td class="center">Action</td>
	</tr>
	<tr ng-repeat="user in info | orderBy : 'name'">
		<td class="center">{{user.name | capitalize}}</td>
		<td class="center">{{user.phone}}</td>
		<td class="center">{{user.email}}</td>
		<td class="center">{{user.mark1}}</td>
		<td class="center">{{user.mark2}}</td>
		<td class="center">{{user.average}}</td>
		<td class="center"><a href="#/edituser?userId={{user.userId}}">Edit</a> | <a href="#/deleteuser?userId={{user.userId}}">Delete</a></td>
	</tr>
	<tr ng-show="!info.length">
		<td class="center">No Records!</td>
		<td class="center">&nbsp;</td>
		<td class="center">&nbsp;</td>
		<td class="center">&nbsp;</td>
		<td class="center">&nbsp;</td>
		<td class="center">&nbsp;</td>
		<td class="center">&nbsp;</td>
	<tr>
</table>