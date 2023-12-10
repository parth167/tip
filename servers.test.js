describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  // alteast one server needed
  it('should not  add a new server with empty value to allServers on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });
  it('should update table after updateServerTable()', function () {
    updateServerTable();
    submitServerInfo();
    let tdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(tdList.length).toEqual(2);
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00');
  });
  //

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
