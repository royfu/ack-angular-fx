export const string =
'<div class="container">'+
'  <h1>ack-angular-fx</h1>'+
'  <div style="display:flex;flex-wrap:wrap;align-items: center">'+
'    <h2>Short-hand Animations</h2>'+
'    <div style="text-align:right;padding:1em;font-size:0.75em;line-height:0;">'+
'      <a (click)="toggleAllShorts()">toggle all</a>'+
'      <select [(ngModel)]="panelAnimType">'+
'        <option [ngValue]="\'bounceIn\'">bounceIn</option>'+
'        <option [ngValue]="\'slideIn\'">slideIn</option>'+
'        <option [ngValue]="\'fadeIn\'">fadeIn</option>'+
'        <option [ngValue]="\'rotateInDown\'">rotateInDown</option>'+
'        <option [ngValue]="\'rotateInUp\'">rotateInUp</option>'+
'        <option [ngValue]="\'zoomIn\'">zoomIn</option>'+
'      </select>'+
'    </div>'+
'  </div>'+
'  <div class="wrap">'+
'    <div class="demo-wrap" (click)="show100=!show100">'+
'      <div class="demo-item" *ngIf="!show100" [@100]="panelAnimType+\'Left\'">[@100]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show200=!show200">'+
'      <div class="demo-item" *ngIf="!show200" [@200]="panelAnimType+\'Left\'">[@200]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show300=!show300">'+
'      <div class="demo-item" *ngIf="!show300" [@300]="panelAnimType+\'Left\'">[@300]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show400=!show400">'+
'      <div class="demo-item" *ngIf="!show400" [@400]="panelAnimType+\'Left\'">[@400]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show500=!show500">'+
'      <div class="demo-item" *ngIf="!show500" [@500]="panelAnimType+\'Left\'">[@500]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show600=!show600">'+
'      <div class="demo-item" *ngIf="!show600" [@600]="panelAnimType+\'Left\'">[@600]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show700=!show700">'+
'      <div class="demo-item" *ngIf="!show700" [@700]="panelAnimType+\'Left\'">[@700]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show800=!show800">'+
'      <div class="demo-item" *ngIf="!show800" [@800]="panelAnimType+\'Left\'">[@800]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show900=!show900">'+
'      <div class="demo-item" *ngIf="!show900" [@900]="panelAnimType+\'Left\'">[@900]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show1000=!show1000">'+
'      <div class="demo-item" *ngIf="!show1000" [@1000]="panelAnimType+\'Left\'">[@1000]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show1500=!show1500">'+
'      <div class="demo-item" *ngIf="!show1500" [@1500]="panelAnimType+\'Left\'">[@1500]</div>'+
'    </div>'+
'    <div class="demo-wrap" (click)="show2000=!show2000">'+
'      <div class="demo-item" *ngIf="!show2000" [@2000]="panelAnimType+\'Left\'">[@2000]</div>'+
'    </div>'+
'  </div>'+
''+
'  <div style="display:flex;flex-wrap:wrap;align-items: center">'+
'    <h2>Entering and Leaving</h2>'+
'    <div style="text-align:right;padding:1em;font-size:0.75em;line-height:0;">'+
'      <a (click)="onToggleInAll()">toggle all</a>'+
'    </div>'+
'  </div>'+
'  <div class="wrap">'+
'    <div class="demo-wrap" *ngFor="let item of inAnimations" (click)="item.show = !item.show">'+
'      <div class="demo-item" *ngIf="item.show" [@500]="item.key" [ngStyle]="{\'background-color\': \'#\' + item.bg}">'+
'        {{item.key}}'+
'      </div>'+
'    </div>'+
'  </div>'+
''+
'  <div style="display:flex;flex-wrap:wrap;align-items: center">'+
'    <h2>Replace With [hidden]</h2>'+
'    <div style="text-align:right;padding:1em;font-size:0.75em;line-height:0;">'+
'      <a (click)="onToggleOutAll()">toggle all</a>'+
'    </div>'+
'  </div>'+
'  <div class="wrap">'+
'    <div class="demo-wrap" *ngFor="let item of outAnimations" (click)="onToggleOutItem(item)">'+
'      <div class="demo-item" [@500]="item.state" [ngStyle]="{\'background-color\': \'#\' + item.bg}">'+
'        {{item.key}}'+
'      </div>'+
'    </div>'+
'  </div>'+
''+
'  <div style="display:flex;flex-wrap:wrap;align-items: center">'+
'    <h2>Swap Animation</h2>'+
'    <div style="text-align:right;padding:1em;font-size:0.75em;line-height:0;">'+
'      <button (click)="priorPanel()">&nbsp;&nbsp;&nbsp;&laquo;&nbsp;&nbsp;&nbsp;</button>'+
'      &nbsp;'+
'      <button (click)="nextPanel()">&nbsp;&nbsp;&nbsp;&raquo;&nbsp;&nbsp;&nbsp;</button>'+
'      <select [(ngModel)]="panelAnimType">'+
'        <option [ngValue]="\'bounceIn\'">bounceIn</option>'+
'        <option [ngValue]="\'slideIn\'">slideIn</option>'+
'        <option [ngValue]="\'fadeIn\'">fadeIn</option>'+
'        <option [ngValue]="\'rotateInDown\'">rotateInDown</option>'+
'        <option [ngValue]="\'rotateInUp\'">rotateInUp</option>'+
'        <option [ngValue]="\'zoomIn\'">zoomIn</option>'+
'      </select>'+
'    </div>'+
'  </div>'+
'  <div style="position:relative;min-height:175px;background-color:rgb(195, 11, 95);padding:1em;color:white;">'+
'    <div (click)="swapShow=1" *ngIf="!swapShow" [@absoluteSwap]="panelAnimation">'+
'      [@absoluteSwap]'+
'      <p>Step 1</p>'+
'      <div>Create a master container with style="position:relative"</div>'+
'      <p style="font-size:0.75em;">TIP : If its not the last element on the page, you may need a min-height style treatment to avoid bounding sibling elements.</p>'+
'    </div>'+
'    <div (click)="swapShow=2" *ngIf="swapShow==1" [@absoluteSwap]="panelAnimation">'+
'      [@absoluteSwap] 1'+
'      <p>Step 2</p>'+
'      <div>Create several children with attributes *ngIf="" and [@absoluteSwap]="panelAnimation"</div>'+
'    </div>'+
'    <div (click)="swapShow=3" *ngIf="swapShow==2" [@absoluteSwap]="panelAnimation">'+
'      [@absoluteSwap] 2'+
'      <p>Step 3</p>'+
'      <div>Enjoy You Sliding Panels</div>'+
'    </div>'+
'    <div (click)="swapShow=0" *ngIf="swapShow==3" [@absoluteSwap]="panelAnimation">'+
'      [@absoluteSwap] 3'+
'      <p>Absolute Note</p>'+
'      <div>Elements in swap animation are absolutely positioned during animation and this may require additional consideration before using.</div>'+
'    </div>'+
'  </div>'+
''+
'  <br />'+
'  <div style="text-align:center;">'+
'    <p>'+
'      <a href="https://github.com/ackerapple/ack-angular-fx">View on GitHub</a>'+
'    </p>'+
''+
'    <p style="font-size:0.75em;">Animation staggering on this page is provided setTimeout()</p>  '+
'  </div>'+
''+
'</div>'