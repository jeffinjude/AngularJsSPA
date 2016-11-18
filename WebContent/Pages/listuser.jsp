<div>
	<table class="flatTable">
		<tr class="titleTr">
			<td class="center">List User</td>
		</tr>
	</table>
	<br/>
	<table class="flatTable">
		<tr class="titleTr">
			<td class="center">ID</td>
			<td class="center">Phone</td>
			<td class="center">Email</td>
			<td class="center">Mark1</td>
			<td class="center">Mark2</td>
			<td class="center">Average</td>
		</tr>
		<tr ng-repeat="user in userList">
			<td class="center">{{user.name}}</td>
			<td class="center">{{user.phone}}</td>
			<td class="center">{{user.email}}</td>
			<td class="center">{{user.mark1}}</td>
			<td class="center">{{user.mark2}}</td>
			<td class="center">{{user.average}}</td>
		</tr>
	</table>
</div>
