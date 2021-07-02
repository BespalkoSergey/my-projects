# Removes all virtual desktops
# Install Install-Module -Name VirtualDesktop
# https://github.com/MScholtes/PSVirtualDesktop 

Get-DesktopList | Where-Object { $_.Number -ne "0" }  | ForEach-Object {
  $target | Remove-Desktop -Verbose
}