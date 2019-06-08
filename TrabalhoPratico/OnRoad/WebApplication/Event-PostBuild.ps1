param
(
	[string] $buildConfiguration = "Debug",
	[string] $platform = "x64",
	[string] $solutionDir = "$PSScriptRoot\..",
	[string] $targetDir = "bin\x64\Debug"
)

Set-ExecutionPolicy Unrestricted -Scope Process

Write-Output "Copying sapnco from CommonReferences to Stubs folder"
$source = [System.IO.Path]::GetFullPath("$PSScriptRoot\..\..\CommonReferences\nuget\SAPfake\sapnco.dll")
$target = [System.IO.Path]::GetFullPath("$targetDir\Stubs\StubSAPConnector.dll")
$stubsDir = [System.IO.Path]::GetFullPath("$targetDir\Stubs")
Write-Output "source: $source"
Write-Output "target: $target"
New-Item -ItemType Directory -Path $stubsDir -Force
Copy-Item $source $target -Force

Write-Output "Deleting sapnco from target folder"
$source = [System.IO.Path]::GetFullPath("$targetDir\sapnco.dll")
Write-Output "source: $source"
if (Test-Path $source) { Remove-Item $source }

$nuget   = [System.IO.Path]::GetFullPath("$solutionDir\..\..\CITools\Build\Rel\References\nuget.exe")
$packageConfig   = [System.IO.Path]::GetFullPath("$solutionDir\BizAgiBPM\packages.config")
$nugetConf = [System.IO.Path]::GetFullPath("$solutionDir\..\..\CITools\Build\Rel\nuget.config")
.$nuget update $packageConfig  -ConfigFile $nugetConf -Id 'bizagi.jquery.bpm' -Safe


&"$PSScriptRoot\InstallNuget.ps1" $PSScriptRoot
Copy-Item -Path "$PSScriptRoot\version.json.txt" -Destination "$PSScriptRoot\jquery" -Force
Set-ExecutionPolicy Undefined -Scope Process

