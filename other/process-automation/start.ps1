# Starting script virtual desktops
# Install Install-Module -Name VirtualDesktop
# https://github.com/MScholtes/PSVirtualDesktop 

$StartDesctop = Get-CurrentDesktop

Start-Process "C:\Users\SergeyB\AppData\Local\slack\slack.exe"
Start-Sleep 1

New-Desktop | Switch-Desktop 
$Tab = "https://rabota.atlassian.net/secure/RapidBoard.jspa?rapidView=57&projectKey=AUTO" 
Start-Process  "C:\Program Files\Mozilla Firefox\firefox.exe" -ArgumentList $Tab -WindowStyle Maximized

Start-Sleep 1

New-Desktop | Switch-Desktop 

Start-Process "C:\Program Files\Git\git-bash.exe" --cd="D:\alliance"
Start-Process "C:\Program Files\Git\git-bash.exe" --cd="D:\adm8\admin8"

$StartAdminCRM = "cd D:\alliance; yarn generate-graphql:admin-crm:watch"
Start-Process powershell -ArgumentList "-NoExit", "-Command  &{ $StartAdminCRM }" 

Start-Sleep 10

$StartAdminCRM = "cd D:\alliance; yarn start admin-crm"
Start-Process powershell -ArgumentList "-NoExit", "-Command  &{ $StartAdminCRM }" 

Start-Sleep 5

New-Desktop | Switch-Desktop 
Start-Process  "D:\adm8\admin8\Admin8.sln" -WindowStyle Maximized

Start-Sleep 15

New-Desktop | Switch-Desktop 
Start-Process  "D:\Program Files\JetBrains\WebStorm 2020.2.3\bin\webstorm64.exe" -WindowStyle Maximized

Start-Sleep 30

New-Desktop | Switch-Desktop 
Start-Process  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -WindowStyle Maximized

Start-Sleep 2

New-Desktop | Switch-Desktop 
Start-Process  "C:\Users\SergeyB\AppData\Local\Figma\Figma.exe" -WindowStyle Maximized

Start-Sleep 5

Switch-Desktop $StartDesctop