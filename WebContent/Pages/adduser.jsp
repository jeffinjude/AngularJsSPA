<div ng-controller="AdduserController as adduserController">
	<table class="flatTable">
		<tr class="titleTr">
			<td class="center">Add User</td>
		</tr>
	</table>
	<form name="userForm" novalidate id="userForm" method="post">
		<table class="flatTable">
			<tr>
				<td>
					Name<span class="required">*</span>:
				</td>
				<td>
					<input type="text" name="name" id="name" ng-model="adduserController.userData.name" required>
				</td>
			</tr>
			<tr>
				<td>
					Phone (10 digits)<span class="required">*</span>:
				</td>
				<td>
					<input type="text" name="phone" id="phone" ng-model="adduserController.userData.phone" required ng-pattern="/^[0-9]{10}$/">
				</td>
			</tr>
			<tr>
				<td>
					Email Address<span class="required">*</span>:
				</td>
				<td>
					<input type="email" namee="email" id="email" ng-model="adduserController.userData.email" required>
				</td>
			</tr>
			<tr>
				<td>
					Mark 1<span class="required">*</span>:
				</td>
				<td>
					<input type="number" id="mark1" name="mark1" ng-model="adduserController.userData.mark1" required>
				</td>
			</tr>
			<tr>
				<td>
					Mark 2<span class="required">*</span>:
				</td>
				<td>
					<input type="number" name="mark2" id="mark2" ng-model="adduserController.userData.mark2" required>
				</td>
			</tr>
			<tr>
				<td>
					Total Marks :
				</td>
				<td>
					{{ adduserController.userData.mark1 + adduserController.userData.mark2}}
				</td>
			</tr>
			<tr>
				<td>
					Average :
				</td>
				<td>
					{{ (adduserController.userData.mark1 + adduserController.userData.mark2) / 2 }}
				</td>
			</tr>
			<tr>
				<td>
					&nbsp;
				</td>
				<td>
					<button name="submitBtn" id="submitBtn" ng-click="adduserController.submitForm(userForm)">Submit</button>
				</td>
			</tr>
		</table>
	</form>
</div>
