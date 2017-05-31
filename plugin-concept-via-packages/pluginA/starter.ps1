#Author: Paweł Laprus
param (
	[string]$target = "HelloWorld"
	)
Write-Host "This script allows create new project based on the rsw.template.uifornpm"
Write-Host "INFO: to run this script make sure that you do not have any local changes!!!"
Write-Host "INFO: Example use: powershell .\starter.ps1 -target myNewName"

"In progress target is $($target)..."

$replaceFrom = "rsw.template.uifornpm"
$replaceTo = "$($target)"

(Get-Content .\package.json).replace($replaceFrom, $replaceTo) | Set-Content .\package.json
(Get-Content .\.angular-cli.json).replace($replaceFrom, $replaceTo) | Set-Content .\.angular-cli.json
(Get-Content .\gulpfile.js).replace($replaceFrom, $replaceTo) | Set-Content .\gulpfile.js
(Get-Content .\src\tsconfig.release.es.json).replace($replaceFrom, $replaceTo) | Set-Content .\src\tsconfig.release.es.json
(Get-Content .\src\tsconfig.release.es5.json).replace($replaceFrom, $replaceTo) | Set-Content .\src\tsconfig.release.es5.json


Write-Host "Done"