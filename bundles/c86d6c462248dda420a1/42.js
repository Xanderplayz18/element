(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1628:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(1),i=n.n(a),o=n(0),s=n.n(o),c=n(7),r=n(9),l=n(2),u=n(11),d=n(658),h=n(13),p=n(59),m=n(34);class b extends s.a.PureComponent{constructor(...e){super(...e),i()(this,"onOkClick",(()=>{this.props.onFinished()})),i()(this,"onGoToSettingsClick",(()=>{this.props.onFinished(),r.a.fire(h.a.ViewUserSettings)})),i()(this,"onSetupClick",(async()=>{u.b.createDialog(d.a,{onFinished:this.props.onFinished},void 0,!1,!0)}))}render(){const e=s.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(l.b)("New Recovery Method")),t=s.a.createElement("p",null,Object(l.b)("A new Security Phrase and key for Secure Messages have been detected.")),n=s.a.createElement("p",{className:"warning"},Object(l.b)("If you didn't set the new recovery method, an attacker may be trying to access your account. Change your account password and set a new recovery method immediately in Settings."));let a;return a=c.a.safeGet().getKeyBackupEnabled()?s.a.createElement("div",null,t,s.a.createElement("p",null,Object(l.b)("This session is encrypting history using the new recovery method.")),n,s.a.createElement(p.a,{primaryButton:Object(l.b)("action|ok"),onPrimaryButtonClick:this.onOkClick,cancelButton:Object(l.b)("Go to Settings"),onCancel:this.onGoToSettingsClick})):s.a.createElement("div",null,t,n,s.a.createElement(p.a,{primaryButton:Object(l.b)("Set up Secure Messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(l.b)("Go to Settings"),onCancel:this.onGoToSettingsClick})),s.a.createElement(m.a,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:e},a)}}}}]);
//# sourceMappingURL=42.js.map