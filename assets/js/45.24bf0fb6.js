(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{499:function(t,e,o){t.exports=o.p+"assets/img/good-efi.cdd27487.png"},500:function(t,e,o){t.exports=o.p+"assets/img/bad-efi.3a816e2e.png"},642:function(t,e,o){"use strict";o.r(e);var n=o(25),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"installation-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[t._v("#")]),t._v(" Installation Process")]),t._v(" "),n("p",[t._v("Now that you've finished setting up OpenCore, you're finally able to boot, main things to keep in mind:")]),t._v(" "),n("ul",[n("li",[t._v("Enable BIOS settings optimal for macOS")]),t._v(" "),n("li",[t._v("Read up on the "),n("a",{attrs:{href:"https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multiboot Guide"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("Mainly relevant for those running a single drive for multiple OSes")])])]),t._v(" "),n("li",[t._v("And a copy of the "),n("RouterLink",{attrs:{to:"/troubleshooting/troubleshooting.html"}},[t._v("General Troubleshooting")]),t._v(" page")],1),t._v(" "),n("li",[t._v("Read up on the "),n("RouterLink",{attrs:{to:"/troubleshooting/boot.html"}},[t._v("macOS Boot Process")]),t._v(" "),n("ul",[n("li",[t._v("Can help first time installers better understand where they may be getting stuck")])])],1),t._v(" "),n("li",[t._v("And a ton of patience")])]),t._v(" "),n("h2",{attrs:{id:"double-checking-your-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#double-checking-your-work"}},[t._v("#")]),t._v(" Double checking your work")]),t._v(" "),n("p",[t._v("One last thing we should go over before booting is how your EFI is setup:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Good EFI")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Bad EFI")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:o(499),alt:""}})]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:o(500),alt:""}})])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("EFI folder found on EFI partition")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("EFI folder missing")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("ACPI Files are compiled(.aml)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ACPI Files are not compiled(.dsl)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("DSDT is not included")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("* DSDT is included")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("Removed unneeded Drivers(.efi)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Leaves default Drivers")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("Removed unneeded Tools(.efi)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Leaves default Tools")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("All files in the Kexts folder end in .kext")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Includes source code and folders")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("config.plist found under EFI/OC")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Neither renamed or placed the .plist in right location")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("Only uses kexts that are needed")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Downloaded every kext listed")])])])]),t._v(" "),n("p",[t._v("And a reminder that slowgeek site is your friend:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://opencore.slowgeek.com",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Sanity Checker")]),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"booting-the-opencore-usb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#booting-the-opencore-usb"}},[t._v("#")]),t._v(" Booting the OpenCore USB")]),t._v(" "),n("p",[t._v("So you're now ready to finally put the USB stick into your computer and boot off of it, remember that your laptop will still default to the internal drive with Windows so you'll need to enter the BIOS or boot menu and select the USB. You'll need to check in the user manual or use a bit of google to find out what Fn key accesses the BIOS and boot menu(ie. Esc, F2, F10 or F12)")]),t._v(" "),n("p",[t._v("Once you boot the USB, you'll likely be greeted to the following boot options:")]),t._v(" "),n("ol",[n("li",[t._v("Windows")]),t._v(" "),n("li",[t._v("macOS Base System (External) / Install macOS Catalina (External)")]),t._v(" "),n("li",[t._v("OpenShell.efi")]),t._v(" "),n("li",[t._v("Reset NVRAM")])]),t._v(" "),n("p",[t._v("For use, "),n("strong",[t._v("Option 2.")]),t._v(" is the one we want. Depending how the installer was made, it may report as either "),n("strong",[t._v('"macOS Base System (External)"')]),t._v(" if created in Linux or Windows and "),n("strong",[t._v('"Install macOS Catalina (External)"')]),t._v(" if created in macOS.")]),t._v(" "),n("h2",{attrs:{id:"macos-installer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#macos-installer"}},[t._v("#")]),t._v(" macOS Installer")]),t._v(" "),n("p",[t._v("So you've finally got the installer booted, got through the verbose and hit the installer! Now that you've gotten this far,  the main things to keep in mind:")]),t._v(" "),n("ul",[n("li",[t._v("Drives you wish to install macOS on "),n("strong",[t._v("must")]),t._v(" be both of GUID partition Scheme "),n("strong",[t._v("and")]),t._v(" APFS\n"),n("ul",[n("li",[t._v("High Sierra on HDD and all Sierra users will need to use macOS Journaled(HFS+)")])])]),t._v(" "),n("li",[t._v("The drive "),n("strong",[t._v("must")]),t._v(" also have a 200MB partition\n"),n("ul",[n("li",[t._v("By default, macOS will setup freshly formatted drives with 200MB")]),t._v(" "),n("li",[t._v("See the "),n("a",{attrs:{href:"https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multiboot Guide"),n("OutboundLink")],1),t._v(" for more info on partitioning a Windows Drive")])])])]),t._v(" "),n("p",[t._v('Once you start the installation, you will want to wait until the system restarts. You will once again want to boot into OpenCore, but rather than selecting your USB installer/recovery - you will want to select the macOS installer on the hard drive to continue installation. You should get an apple logo, and after a few minutes you should get a timer at the bottom saying "x minutes remaining". This may be a good time to get a drink or snack as this will take a while. It may restart a couple more times, but if all goes well, it should finally plop you at the "Setup your Mac screen"')]),t._v(" "),n("p",[t._v("You're in! 🎉\nYou will want to go through the Post-Installation pages to finish setting up your system.")])])}),[],!1,null,null,null);e.default=i.exports}}]);