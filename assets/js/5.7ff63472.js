(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{334:function(t,e,a){t.exports=a.p+"assets/img/format-usb.83a24b13.png"},361:function(t,e,a){t.exports=a.p+"assets/img/macrecovery.af5c41c1.png"},362:function(t,e,a){t.exports=a.p+"assets/img/download-done.05d30da0.png"},518:function(t,e,a){t.exports=a.p+"assets/img/gib.b3fe2322.png"},519:function(t,e,a){t.exports=a.p+"assets/img/gib-process.c5982045.png"},520:function(t,e,a){t.exports=a.p+"assets/img/gib-location.8afc21af.png"},521:function(t,e,a){t.exports=a.p+"assets/img/gib-done.28275135.png"},522:function(t,e,a){t.exports=a.p+"assets/img/unsupported.679e01e6.png"},523:function(t,e,a){t.exports=a.p+"assets/img/mount.d471affc.png"},524:function(t,e,a){t.exports=a.p+"assets/img/fat32-erase.d4148162.png"},525:function(t,e,a){t.exports=a.p+"assets/img/dmg-chunklist.c22cb668.png"},526:function(t,e,a){t.exports=a.p+"assets/img/pre-restore.7cbd2b4d.png"},527:function(t,e,a){t.exports=a.p+"assets/img/restore.4a8e8078.png"},528:function(t,e,a){t.exports=a.p+"assets/img/sip-fail.f3b6ef3b.png"},529:function(t,e,a){t.exports=a.p+"assets/img/download.974b60da.png"},530:function(t,e,a){t.exports=a.p+"assets/img/boot-disk.73bf04f5.png"},531:function(t,e,a){t.exports=a.p+"assets/img/boot-done.48b57b22.png"},532:function(t,e,a){t.exports=a.p+"assets/img/efi-base.2af0e24a.png"},533:function(t,e,a){t.exports=a.p+"assets/img/mount-efi-usb.c855475e.png"},534:function(t,e,a){t.exports=a.p+"assets/img/base-efi.3b1f0304.png"},646:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"making-the-installer-in-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-macos"}},[t._v("#")]),t._v(" Making the installer in macOS")]),t._v(" "),s("ul",[s("li",[t._v("Supported version: 0.6.2")])]),t._v(" "),s("p",[t._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),t._v(" "),s("p",[t._v("To start we'll want to grab ourselves a copy of macOS. You can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the App Store or with gibMacOS.")]),t._v(" "),s("h2",{attrs:{id:"downloading-macos-modern-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-modern-os"}},[t._v("#")]),t._v(" Downloading macOS: Modern OS")]),t._v(" "),s("ul",[s("li",[t._v("This method allows you to download macOS 10.13 and newer, for 10.12 and older see "),s("a",{attrs:{href:"#downloading-macos-legacy-os"}},[t._v("Downloading macOS: Legacy OS")])])]),t._v(" "),s("p",[t._v("From a macOS machine that meets the requirements of the OS version you want to install, go directly to the App Store and download the desired OS release and continue to "),s("a",{attrs:{href:"#setting-up-the-installer"}},[s("strong",[t._v("Setting up the installer")])]),t._v(".")]),t._v(" "),s("p",[t._v("For machines that need a specific OS release or can't download from the App Store, you can use the gibMacOS utility.")]),t._v(" "),s("p",[t._v("Now let's grab "),s("a",{attrs:{href:"https://github.com/corpnewt/gibMacOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("gibMacOS"),s("OutboundLink")],1),t._v(", then unzip it into a local directory.")]),t._v(" "),s("p",[t._v("Next run the "),s("code",[t._v("gibMacOS.command")]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:a(518),alt:""}})]),t._v(" "),s("p",[t._v("As you can see, we get a nice list of macOS installers. If you need beta versions of macOS, you can select "),s("code",[t._v("C. Change Catalog")]),t._v(". For this example we'll choose 1:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(519),alt:""}})]),t._v(" "),s("p",[t._v("This is going to take a while as we're downloading the entire 8GB+ macOS installer, so it's highly recommended to read the rest of the guide while you wait.")]),t._v(" "),s("p",[t._v("Once finished, we'll next want to run the "),s("code",[t._v("BuildmacOSInstallApp.command")]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:a(520),alt:""}})]),t._v(" "),s("p",[t._v("You will be prompted for the macOS installer files which were downloaded to "),s("code",[t._v("macOS Downloads")]),t._v(" folder in the gibMacOS directory.")]),t._v(" "),s("p",[t._v('From the Finder, drill down to the folder containing the downloaded files and either drag it to the command line or "Cmd+C" and paste it to the terminal.')]),t._v(" "),s("p",[t._v("Once the task is completed, exit the utility. You will find the Install file in the directory.")]),t._v(" "),s("p",[t._v("Move the newly created image to the Applications folder – this will simplify the next section.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(521),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"downloading-macos-legacy-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-legacy-os"}},[t._v("#")]),t._v(" Downloading macOS: Legacy OS")]),t._v(" "),s("ul",[s("li",[t._v("This method allows you to download much older versions of OS X, currently supporting all Intel versions of OS X(10.4 to current)")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Grabbing legacy versions of macOS: Offline method(10.10-10.12 Supported)")]),t._v(" "),s("h3",{attrs:{id:"legacy-macos-offline-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-offline-method"}},[t._v("#")]),t._v(" Legacy macOS: Offline method")]),t._v(" "),s("p",[t._v('This method allows us to download full installers from Apple, however is limited to 10.10, Yosemite, so older OSes will need to be grabbed via the "Online Method" mentioned below.')]),t._v(" "),s("p",[t._v("To start, head to one of the following links:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://support.apple.com/en-ca/HT210717",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to OS X Yosemite"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://support.apple.com/en-us/HT206886",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to OS X El Capitan"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://support.apple.com/en-us/HT208202",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to macOS Sierra"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("On step 4, you'll see either "),s("code",[t._v("InstallOS.dmg")]),t._v(" for Sierra or "),s("code",[t._v("InstallMacOSX.dmg")]),t._v(" for El Capitan and older. Download your desired version and a .pkg file should be provided.")]),t._v(" "),s("p",[t._v("Depending on what OS you're on, you can run this script and head to "),s("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("Setting up the installer")]),t._v(" however if you receive this error:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(522),alt:""}})]),t._v(" "),s("p",[t._v("This means we'll need to manually extract the installer.")]),t._v(" "),s("h3",{attrs:{id:"extracting-the-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extracting-the-installer"}},[t._v("#")]),t._v(" Extracting the Installer")]),t._v(" "),s("p",[t._v("To start, grab the InstallMacOSX/InstallOS.dmg and mount it:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(523),alt:""}})]),t._v(" "),s("p",[t._v("Next, let's open up terminal window and make a folder on our desktop to break things. Run one at a time:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Desktop\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" MacInstall "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" MacInstall\n")])])]),s("p",[t._v("Now we get to the fun part, extracting the installer(Note this may take a few minutes):")]),t._v(" "),s("ul",[s("li",[t._v("For El Capitan(10.11) and older:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xar -xf /Volumes/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X/InstallMacOSX.pkg\n")])])]),s("ul",[s("li",[t._v("For Sierra(10.12):")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xar -xf /Volumes/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS/InstallOS.pkg\n")])])]),s("p",[t._v("Next, run the following(one at a time):")]),t._v(" "),s("ul",[s("li",[t._v("Yosemite:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallMacOSX.pkg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/SharedSupport/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app /Applications\n")])])]),s("ul",[s("li",[t._v("El Capitan:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallMacOSX.pkg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/SharedSupport/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app /Applications\n")])])]),s("ul",[s("li",[t._v("Sierra:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallOS.pkg\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/SharedSupport/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app /Applications\n")])])]),s("p",[t._v("Once this is done, you can head to "),s("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("Setting up the installer")]),t._v("!")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Grabbing legacy versions of macOS: Online method(10.7-10.15 Supported)")]),t._v(" "),s("h3",{attrs:{id:"legacy-macos-online-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-online-method"}},[t._v("#")]),t._v(" Legacy macOS: Online method")]),t._v(" "),s("p",[t._v("This method allows us to download legacy versions of macOS including 10.7 to current, however these are only recovery installers so require an internet connection inside the installer itself")]),t._v(" "),s("p",[t._v("To start, you'll want to use macrecovery.py instead. This tool is actually already bundled in OpenCorePkg:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(361),alt:""}})]),t._v(" "),s("p",[t._v("Instructions for running are quite simple, choose from one of the below commands depending on which OS you want to download:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lion(10.7):")]),t._v("\n./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\n./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mountain Lion(10.8):")]),t._v("\n./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks(10.9):")]),t._v("\n./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite(10.10):")]),t._v("\n./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan(10.11):")]),t._v("\n./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra(10.12):")]),t._v("\n./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra(10.13)")]),t._v("\n./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\n./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave(10.14)")]),t._v("\n./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Latest version")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ie. Catalina(10.15)")]),t._v("\n./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),s("p",[t._v("From here, run one of those commands in terminal and once finished you'll get an output similar to this:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(362),alt:""}})]),t._v(" "),s("p",[t._v("Once this is done, format your USB as FAT32 with GUID Partition Scheme:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(524),alt:""}})]),t._v(" "),s("p",[t._v("And finally, create folder on the root of this drive called "),s("code",[t._v("com.apple.recovery.boot")]),t._v(" and place the newly downloaded BaseSystem/RecoveryImage files in:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(525),alt:""}})]),t._v(" "),s("p",[t._v("From here, you can skip to "),s("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Legacy macOS: Disk Images(10.4-10.6 Supported)")]),t._v(" "),s("h3",{attrs:{id:"legacy-macos-disk-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-disk-images"}},[t._v("#")]),t._v(" Legacy macOS: Disk Images")]),t._v(" "),s("p",[t._v("This method instead relies on hosted images either from Apple or Acidanthera, and restoring onto your drive.")]),t._v(" "),s("h4",{attrs:{id:"acidanthera-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera-images"}},[t._v("#")]),t._v(" Acidanthera Images")]),t._v(" "),s("p",[t._v("The below installers were pulled from genuine Mac restore disks with their SMBIOS lock removed, contents of OS X itself have not been modified in any way.")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://mega.nz/folder/D3ASzLzA#7sjYXE2X09f6aGjol_C7dg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.4.10(8R4088)"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://mega.nz/folder/inRBTarD#zanf7fUbviwz3WHBU5xpCg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.5.7(9J3050)"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://mega.nz/folder/z5YUhYTb#gA_IRY5KMuYpnNCg7kR3ug/file/ioQkTagI",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.6.7(10J4139)"),s("OutboundLink")],1)])])]),t._v(" "),s("h4",{attrs:{id:"apple-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apple-images"}},[t._v("#")]),t._v(" Apple Images")]),t._v(" "),s("p",[t._v("Note that these images require you to have an Apple Developer account to access.")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_v10.5_leopard_9a581/leopard_9a581_userdvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.5.0 Golden Master(9a581)"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_version_10.6_snow_leopard_build_10a432/mac_os_x_v10.6_build_10a432_user_dvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.6.0 Golden Master(10a432)"),s("OutboundLink")],1)])])]),t._v(" "),s("h3",{attrs:{id:"restoring-the-drive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restoring-the-drive"}},[t._v("#")]),t._v(" Restoring the drive")]),t._v(" "),s("p",[t._v("Now comes the fun part, you'll first want to open the dmg you just downloaded and have it mounted. Now open Disk Utility and format your drive as macOS Extended(HFS+) with a GUID partition map:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(334),alt:"Formatting the USB"}})]),t._v(" "),s("p",[t._v("Next we have 2 options to follow:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#asr"}},[t._v("ASR Restore")]),t._v("(Apple Software Restore)\n"),s("ul",[s("li",[t._v("Terminal based, works with SIP enabled")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#disk-utility"}},[t._v("Disk Utility Restore")]),t._v(" "),s("ul",[s("li",[t._v("May require SIP disabled in newer OSes")])])])]),t._v(" "),s("h4",{attrs:{id:"asr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asr"}},[t._v("#")]),t._v(" ASR")]),t._v(" "),s("p",[t._v("Here you'll simply want to open terminal and run the following:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" asr restore -source /Volumes/Mac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" DVD  -target /Volumes/MyVolume -erase -noverify\n")])])]),s("ul",[s("li",[s("strong",[t._v("Note")]),t._v(": This may not align with your setup, please change accordingly:\n"),s("ul",[s("li",[t._v("Change "),s("code",[t._v("/Volumes/Mac\\ OS\\ X\\ Install\\ DVD")]),t._v(" to what your mounted Disk Image is called")]),t._v(" "),s("li",[t._v("Change "),s("code",[t._v("/Volumes/MyVolume")]),t._v(" to what your USB is called")])])])]),t._v(" "),s("p",[t._v("This will take some time but once you're finished, you can skip to "),s("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])]),t._v(" "),s("h4",{attrs:{id:"disk-utility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disk-utility"}},[t._v("#")]),t._v(" Disk Utility")]),t._v(" "),s("p",[t._v("Due to some pesky issues with Disk Utility, many restores can fail if SIP is enabled. If you have issues we recommend either using the "),s("a",{attrs:{href:"#asr"}},[t._v("ASR Method")]),t._v(" or disable SIP.")]),t._v(" "),s("p",[t._v("To start, open Disk Utility and you should see both your USB drive and the Disk Image in the sidebar. From here, select restore")]),t._v(" "),s("p",[s("img",{attrs:{src:a(526),alt:""}}),t._v(" "),s("img",{attrs:{src:a(527),alt:""}})]),t._v(" "),s("p",[t._v("This will take some time but once you're finished, you can skip to "),s("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Troubleshooting")]),t._v(" "),s("p",[t._v("If you get an error such as this one during restore:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(528),alt:""}})]),t._v(" "),s("p",[t._v("This likely means SIP needs to be disabled, however we recommend using "),s("a",{attrs:{href:"#asr"}},[t._v("ASR Method")]),t._v(" instead.")])])]),t._v(" "),s("h2",{attrs:{id:"setting-up-the-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-installer"}},[t._v("#")]),t._v(" Setting up the installer")]),t._v(" "),s("p",[t._v("Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use macOS Extended (HFS+) with a GUID partition map. This will create two partitions: the main "),s("code",[t._v("MyVolume")]),t._v(" and a second called "),s("code",[t._v("EFI")]),t._v(" which is used as a boot partition where your firmware will check for boot files.")]),t._v(" "),s("ul",[s("li",[t._v("Note: By default, Disk Utility only shows partitions – press Cmd/Win+2 to show all devices (alternatively you can press the View button)")]),t._v(" "),s("li",[t._v('Note 2: Users following "Legacy macOS: Online method" section can skip to '),s("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(334),alt:"Formatting the USB"}})]),t._v(" "),s("p",[t._v("Next run the "),s("code",[t._v("createinstallmedia")]),t._v(" command provided by "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple"),s("OutboundLink")],1),t._v(". Note that the command is made for USB's formatted with the name "),s("code",[t._v("MyVolume")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),s("p",[t._v("This will take some time so you may want to grab a coffee or continue reading the guide (to be fair you really shouldn't be following this guide step by step without reading the whole thing first).")]),t._v(" "),s("p",[t._v("You can also replace the "),s("code",[t._v("createinstallmedia")]),t._v(" path with that of where your installer's located (same idea with the drive name).")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Legacy createinstallmedia Commands")]),t._v(" "),s("p",[t._v("Pulled from Apple's own site: "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create a bootable installer for macOS"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app --nointeraction\n")])])])]),t._v(" "),s("h2",{attrs:{id:"legacy-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-setup"}},[t._v("#")]),t._v(" Legacy Setup")]),t._v(" "),s("p",[t._v("For systems not supporting UEFI boot, see below:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Setting up Legacy Boot")]),t._v(" "),s("p",[t._v("To start, you need the following:")]),t._v(" "),s("ul",[s("li",[t._v("BootInstall_IA32.tool or BootInstall_X64.tool\n"),s("ul",[s("li",[t._v("This can be found in OpenCorePkg under "),s("code",[t._v("/Utilties/LegacyBoot/")])])])]),t._v(" "),s("li",[t._v("Install USB(Created above)")])]),t._v(" "),s("p",[t._v("Within your OpenCore build folder, navigate to "),s("code",[t._v("Utilities/LegacyBoot")]),t._v(". Here you'll find a file called "),s("code",[t._v("BootInstall_ARCH.tool")]),t._v(". What this does is install DuetPkg to your desired drive.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(529),alt:"BootInstall Location"}})]),t._v(" "),s("p",[t._v("Now run this tool in terminal "),s("strong",[t._v("with sudo")]),t._v("(This tool will likely fail otherwise):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),s("p",[s("img",{attrs:{src:a(530),alt:"Disk Selection/writing new MBR"}})]),t._v(" "),s("p",[t._v("This will give you a list of available disks, choose yours and you will be prompted to write a new MBR. Choose yes"),s("code",[t._v("[y]")]),t._v(" and you'll be finished.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(531),alt:"Finished Installer"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(532),alt:"Base EFI"}})]),t._v(" "),s("p",[t._v("This will provide you with an EFI partition with either a "),s("strong",[t._v("bootia32")]),t._v(" or "),s("strong",[t._v("bootx64")]),t._v(" file")])]),t._v(" "),s("h2",{attrs:{id:"setting-up-opencore-s-efi-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("#")]),t._v(" Setting up OpenCore's EFI environment")]),t._v(" "),s("p",[t._v("Setting up OpenCore's EFI environment is simple – all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend "),s("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("MountEFI"),s("OutboundLink")],1),t._v(" comes in:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(533),alt:"MountEFI"}})]),t._v(" "),s("p",[t._v("You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(534),alt:"Empty EFI partition"}})]),t._v(" "),s("h2",{attrs:{id:"now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[t._v("#")]),t._v(" Now with all of this done, head to "),s("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("Setting up the EFI")]),t._v(" to finish up your work")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);