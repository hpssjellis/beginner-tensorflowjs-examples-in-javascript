


  //Global Variables
  // Version 0.1.2-18
  // latest change from myDiv01 to myDiv02
  var exports = {};


  /////////////////////////////////////// webSerial code first ///////////////////////////////////////////
  
  //Global Variables
  //let writer;  
  let port
  

document.getElementById('connectButton').addEventListener('click', () => {
  if (navigator.serial) {
    connectSerial();
  } else {
    document.getElementById('myDiv02').innerHTML = 'Web Serial API not supported. Switching to Polyfill<br>'
    myPoly()

  }
});

async function connectSerial() {
  const log = document.getElementById('target');
    
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    
    const decoder = new TextDecoderStream(); 
    port.readable.pipeTo(decoder.writable);

    //setup reader stream 
    const inputStream = decoder.readable;
    const reader = inputStream.getReader();
    
    //setup writer stream
   // writer = port.writable.getWriter();
     
    while (true) {
      const { value, done } = await reader.read();
      if (value) {
        log.textContent += value + '\n';
      }
      if (done) {
        console.log('[readLoop] DONE', done);
        reader.releaseLock();
        break;
      }
    }
  
  } catch (error) {
    log.innerHTML = error;
  }
}  
  
async function mySendIt(myData) {  
  if (navigator.serial) {  
    const encoder = new TextEncoder();
    const writer = port.writable.getWriter();
    await writer.write(encoder.encode(myData));
    writer.releaseLock();
  } else {
    mySend(myData)
  }

} 
  
  
///////////////////////////////////////// end webSerial //////////////////////////////////////////
///////////////////////////////////////// start polyfill for Android ////////////////////////////
  
  
  
  //Global Variables for Polyfill
  var serial = exports.serial;  // is this needed as defined in the npm
 
  let myLooping  // for read setinterval
  var mySerial;
  //let receivedText = '';
  let reader = {};
  let writer = {};
  
   str2ab = function(str) {
    var buf = new Uint8Array(str.length); // 1 byte for each char
    for (var i=0, strLen=str.length; i < strLen; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  }

  ab2str = function(buf) {
    return String.fromCharCode.apply(null, buf);
  } 
  
  
  
async function myRead(){  
    reader.read().then(({value}) => {        
        let receivedText = ab2str(value);
        document.getElementById('target').innerHTML = receivedText + '<br>' + document.getElementById('target').innerHTML // latest on top
      },
      error => {
      console.error('error from read', error)
     document.getElementById('myDiv02').innerHTML = 'error from read' + error
     }
    );
}
  
   
  
async function myPoly(){  
    mySerial = await serial.requestPort()
                                                                     
    document.getElementById('myDiv02').innerHTML += await '<b>mySerial: </b><br><pre>' +  JSON.stringify(mySerial, null, 3) + '</pre><br><br>'      
                                            
                                                                                     
    console.log('mySerial')                    
    console.log(mySerial)   

    const myOpen = await mySerial.open({baudRate: 115200});
    reader = mySerial.readable.getReader();                                              
    writer = mySerial.writable.getWriter();    
                                            
    const results = mySerial.getInfo();
    
    //document.getElementById('myDiv02').innerHTML += await 'Results:<b>: </b><br><pre>' +  JSON.stringify(results, null, 3) + '</pre><br><br>'                                          
    console.log('get info results', results);
    document.getElementById('myDiv02').innerHTML += 'results.usbVendorId: ' + results.usbVendorId + '<br>'
    document.getElementById('myDiv02').innerHTML += 'results.usbProductId: ' + results.usbProductId + '<br>'
 
    
    // start looping the serial read. Is there a better way to do this?
    clearInterval(myLooping)
    myLooping = setInterval(myRead, 1000); 
  }
        
 async function mySend(myData2){  
    writer.ready.then(() => {                                         
      let inputArrayBuffer = str2ab(myData2);
      const myWritten = writer.write(inputArrayBuffer);
      console.log('myWritten')
      console.log(myWritten)
                                         
      //document.getElementById('myDiv02').innerHTML = '<br><br><b>myWriter: </b><br><pre>' +  JSON.stringify(myWritten, null, 3) + '</pre><br><br>'  
                                            
   
    })    
} 
  
/////////////////////////////////////// end Polyfill for Android ////////////////////////////////  




