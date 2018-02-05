(function($) {
    "use strict";

    $(window).load(function() {

        // BLOCKCHAIN PART

        // set the big number format
        let format = {
            decimalSeparator: '.',
            groupSeparator: ',',
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: ' ',
            fractionGroupSize: 0
        };
        BigNumber.config({ FORMAT: format })

        let token = {
            decimals: 18,
        };
        let checkonce = 1;
        token.div=new BigNumber('1e'+token.decimals);

        let quickMap={};
        let network='ropsten';

        let methodsListValues=[
            {
                gatewayUrl:'https://'+network+'.infura.io/d9aEs3oVPeWpQbjGO2wP',
                smartContractAddress:'0x33728DCb716759a3A6caF7ADB3B227994bca929D',
                w3:null,
                abi:[{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"}],"name":"changeDates","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"goal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address[]"},{"name":"value","type":"bool"}],"name":"updateWhitelistMapping","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reservedAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxTokenSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfPurchasers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_rate","type":"uint256"}],"name":"changeRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minimumAmount","type":"uint256"}],"name":"changeMinimumAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_whiteListingAdmin","type":"address"}],"name":"setWhiteListingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"goalReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whiteListingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimRefund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minimumAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"hasEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"transferOwnerShipToPendingOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reservedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_rate","type":"uint256"},{"name":"_goal","type":"uint256"},{"name":"_minimumAmount","type":"uint256"},{"name":"_maxTokenSupply","type":"uint256"},{"name":"_wallet","type":"address"},{"name":"_reservedAddr","type":"address"},{"name":"_reservedAmount","type":"uint256"},{"name":"_pendingOwner","type":"address"},{"name":"_whiteListingAdmin","type":"address"},{"name":"_walletFees","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"}],
                contract:null,
                methodValues:[
                    {
                        name:'endTime',
                        value:null,
                        unit:'date'
                    },
                    {
                        name:'startTime',
                        value:null,
                        unit:'date'
                    },
                    {
                        name:'weiRaised',
                        value:null,
                        unit:'wei'
                    },
                    {
                        name:'rate',
                        value:null,
                        unit:'integer'
                    },
                    {
                        name:'goal',
                        value:null,
                        unit:'wei'
                    }
                    ,
                    {
                        name:'maxTokenSupply',
                        value:null,
                        unit:'wei'
                    },
                    {
                        name:'numberOfPurchasers',
                        value:null,
                        unit:'integer'
                    },
                    {
                        name:'minimumAmount',
                        value:null,
                        unit:'wei'
                    }
                ]
            },
            {

                gatewayUrl:'https://ropsten.infura.io/d9aEs3oVPeWpQbjGO2wP',
                contract:null,
                w3:null,
                smartContractAddress:'0x59Cfe3F214e30252f10fcdcd37Af265c9e71c522',
                abi:[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
                methodValues:[
                    {
                        name:'name',
                        value:null,
                        unit:'string'
                    },
                    {
                        name:'symbol',
                        value:null,
                        unit:'string'
                    },
                    {
                        name:'totalSupply',
                        value:null,
                        unit:'wei'
                    },
                ]
            }
        ];

        // prepare the promises lists

        for(let idx=0;idx<methodsListValues.length;idx++){

            let elt= methodsListValues[idx];
            console.log(elt);
            elt.w3=new Web3(new Web3.providers.HttpProvider(elt.gatewayUrl));
            elt.contract = new elt.w3.eth.Contract(elt.abi, elt.smartContractAddress);
            
        }

        
        function refreshData(){
            let promisesList = [];
            refreshing=true;

            methodsListValues.forEach(function(elt){
                //console.log('contract',elt.smartContractAddress);
                elt.methodValues.forEach(function(pair){
                    // warap into our own promise, needed because of the value and display assignation
                    let promise = new Promise(function(resolve, reject) {

                        elt.contract.methods[pair.name].apply().call()
                        .then(
                            function(value){

                                switch (pair.unit)
                                {
                                    case 'date':
                                       pair.display=  new Date(value * 1000).toLocaleString();
                                       pair.value= value*1000;
                                    break;
                                    case 'wei':
                                       pair.display=  new BigNumber(value).div(token.div).toFormat();
                                       pair.value=value;
                                    break;
                                    default:
                                      pair.display=  value;
                                      pair.value=value;
                                    break;
                                }
                                console.log(pair);
                                quickMap[pair.name]=pair;

                                resolve(pair);
                            },
                            function(error){
                                console.log('error:',error)
                                reject(error);
                            }
                        );
                    });

                    promisesList.push(promise);

                });
             });

            return Promise.all(promisesList);
        }



        // VIEW PART

        let intervals = {};
        let intervalDelays = {
            preSaleClock: 1000,
            onSaleClock: 1000,
            onSaleContractData: 14000 // 14 seconds = average block time
        };

        let wrapper = document.querySelector(".ico-progress-viewer");

        if (!wrapper) {
            return;
        }

        let refreshing=true;
        refreshData().then(updateView);
        setInterval(
            function(){
                console.log('refreshing:',refreshing);
                if (!refreshing)
                {
                    refreshData().then(updateView);
                }                                 
            }, 3000);


        function updateView(){
         let now = new Date().getTime();

            let startDate=  quickMap['startTime'].value;
            let endDate=    quickMap['endTime'].value;

            //  on-sale
            // startDate=now-1000;
            // endDate=now+1000;

            // post sale
            // startDate=now-3000;
            // endDate=now-2000;


            console.log('startDate',startDate,endDate);
            if(checkonce == 1){
                document.querySelector(".ico-progress-viewer").className+=" animated bounceInLeft";
                document.querySelector(".ico-progress-viewer").style.display = "block";
                checkonce = 0;
            }
            let mode = getMode(startDate,endDate);

            console.log('mode',mode);

            updateMode(mode);

            let distance;
            switch (mode)
            {
                case 'pre-sale':
                    distance = new Date(startDate).getTime() - now;

                    console.log('distance:',new Date(distance))
                    updateCountdown("pre-sale", startDate, distance);
                break;
                case 'on-sale':
                     distance = new Date(endDate).getTime() - now;
                     updateCountdown("on-sale", endDate, distance);
                     updateOnSaleData(quickMap);
                break;
                case 'post-sale':
                    wrapper.querySelector(".total-raised-amount").innerHTML = quickMap['weiRaised'].display;
                break;
            }
            refreshing=false;
        }

        function getMode(startDate,endDate) {

            let now = new Date().getTime();

            // compute the distance in time to the beginning of the event
            let distance = new Date(startDate).getTime() - now;



            let mode = "pre-sale";

            if (distance < 0) {
                if (now > endDate) {
                    mode = "post-sale";
                } else {
                    mode = "on-sale";
                }
            }

            return mode;
        }

        function updateMode(mode) {
            let nodeList = wrapper.querySelectorAll(".mode");
            nodeList.forEach(function(element) {
                element.style.display = "none";
            });
            wrapper.querySelector(`.mode.mode-${mode}`).style.display = "block";
        }

        function updateCountdown(mode, abs_date, distance) {
            let dateFormat;

            let d = padNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
            let h = padNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let m = padNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            let s = padNumber(Math.floor((distance % (1000 * 60)) / 1000));

            let countdownString = `<div>${d}</div><div>:</div><div>${h}</div><div>:</div><div>${m}</div><div>:</div><div>${s}</div>`;
            if (mode === "pre-sale") {
                wrapper.querySelector(".mode-pre-sale .countdown").innerHTML = countdownString;
                wrapper.querySelector(".mode-pre-sale .start-date").innerHTML = moment(abs_date).format(dateFormat);
            } else if (mode === "on-sale") {
                wrapper.querySelector(".mode-on-sale .countdown").innerHTML = countdownString;
                wrapper.querySelector(".mode-on-sale .end-date").innerHTML = moment(abs_date).format(dateFormat);
            }
        }

        function padNumber(num) {
            return num < 10 ? "0" + num : "" + num;
        }

        function updateOnSaleData(_quickMap) {
            // contract address
            let host;
            if (network=='ropsten')
            {
                host='ropsten.etherscan.io';
            }else{
                host='etherscan.io';
            }

            wrapper.querySelector(".contract-address").href = `https://${host}/address/${methodsListValues[0].smartContractAddress}`;
            wrapper.querySelector(".contract-address").innerHTML = methodsListValues[0].smartContractAddress;
            wrapper.querySelector(".contract-address").target = "_blank";

            // additional info
            wrapper.querySelector(".min-cap").innerHTML = `${_quickMap.goal.display} ETH`;
            wrapper.querySelector(".max-cap").innerHTML = `${_quickMap.maxTokenSupply.display}`;

            //progress bar (with a small delay)
            setTimeout(function() {
                let progressBarMax = _quickMap.maxTokenSupply.value;

                let percent = Math.min(100, _quickMap.totalSupply.value / progressBarMax * 100);
                //wrapper.querySelector(".progress-bar-outer").dataset.progressValue = `${_quickMap['weiRaised'].display} ETH`;
                wrapper.querySelector(".progress-out-value").innerHTML = `${_quickMap['weiRaised'].display}`;
                wrapper.querySelector(".progress-value").style.width = `${percent}%`;
            }, 200);
        }

    });
})(jQuery);
