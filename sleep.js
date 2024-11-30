//
// Sleep function for nodejs sync needs using different strategies
//
function Sleep(i)
{
    if (i>=1000) {
        if (i%1000) Sleep(i % 1000);
        require('child_process').execSync("ping 127.0.0.1 -n "+Math.floor(i/1000+1)+" > nul");
    }
    else if (i>=200) { 
        require('child_process').execSync('powershell -command "Start-Sleep -Milliseconds '+Math.max(0, i-200)+'"');
    }
    else {
        let stime = performance.now();     // started time
        while (performance.now() - stime < i) require('child_process').execSync("ping 127.0.0.1 -n 1 > nul");
    }
}
