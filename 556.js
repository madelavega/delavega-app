(self.webpackChunkdelavega_app=self.webpackChunkdelavega_app||[]).push([[556],{6556:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(2189);class d extends r.L{constructor(){super(),this.data=[],this.loading=!1}static get properties(){return{data:{type:Array},loading:{type:Boolean}}}static get styles(){return r.c`
        
            /* Table */
            
            table {
                border-collapse: collapse;
                width: 100%;
            }

            table td, table th {
                border: 1px solid #ddd;
                padding: 8px;
            }

            table tr:nth-child(even){
                background-color: rgb(238 238 238);
            }

            table tr:hover {
                background-color: #ddd;
            }

            table th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #68A304;
                color: white;
            }

            /*   CARD  */
            
            .cards .card {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-content: stretch;
                align-items: flex-start;
                padding: 10px 15px;
                border-radius: 5px;
            }
            
            .card .headers {
                order: 0;
                flex: 0 1 auto;
                align-self: auto;
                margin-right: 20%;
            }
            
            .card .values {
                order : 1;
                flex: 1 1 auto;
                align-self: auto;
            }
            
           .card span {
                display: block;
           }
           
           .card.odd {
                background: rgb(238 238 238);
            
           }
      `}_getRecordCells(e){const t=this.children,a=[];for(const r of t){const t=e?.[r?.dataIndex]??null;a.push({value:t?r.columnTypes[r.type]?.(t)??t:"",dataIndex:r?.dataIndex??"",columnHeader:r?.header??""})}return a.map((e=>e))}_renderDesktopData(){return r.h`
            ${this.data.map((e=>r.h`
                <tr>
                    ${this._getRecordCells(e).map((({value:e})=>r.h`<td>${e}</td>`))}                
                </tr>
            `))}
        `}_renderDesktopHeaders(){const e=this.children,t=[];for(const a of e)t.push(a?.header??"");return t.map((e=>r.h`<th>${e}</th>`))}_getDesktopTable(){return r.h`
            <table>
                <thead>
                    <tr>
                        ${this._renderDesktopHeaders()}
                    </tr>
                </thead>
                <tbody>
                    ${this._renderDesktopData()}
                </tbody>
            </table>
        `}_getCard(e){const t=this._getRecordCells(e);return r.h`
            <div class="headers">
                ${t.map((({columnHeader:e})=>r.h`<span class="header">${e}</span>`))}
            </div>
            <div class="values">
                ${t.map((({value:e})=>r.h`<span class="value">${e}</span>`))}
            </div>
        `}_getMobileCards(){return r.h`
            <div class="cards">
                ${this.data.map(((e,t)=>r.h`
                    <div class="card ${t%2?"":"odd"}">
                        ${this._getCard(e)} 
                    </div>
                `))}
            </div>
        `}render(){return this.loading?r.h`<span class="loader">Loading...</span>`:r.h`${window.matchMedia?.("(max-width: 600px)")?.matches?this._getMobileCards():this._getDesktopTable()}`}}customElements.define("delavega-table",d);class s extends r.L{constructor(){super(),this.columnTypes={currency:e=>`€${e}`}}static get properties(){return{dataIndex:{type:String},header:{type:String},type:{type:String}}}onColumClick(){}render(){return r.h`<th @click="${this.onColumClick}"></th>`}}customElements.define("delavega-table-column",s);const l={Table:d,TableColumn:s}}}]);