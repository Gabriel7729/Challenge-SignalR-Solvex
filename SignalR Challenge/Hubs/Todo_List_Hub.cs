using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR_Challenge.Hubs
{
    public class Todo_List_Hub : Hub
    {
        public async Task SendElement(string todo)
        {
            await Clients.All.SendAsync("ReceiveMessage", todo);
        }
    }
}
