using Microsoft.AspNetCore.Identity;

namespace MediLab.Models.Auth;

public class AppUser:IdentityUser
{
    public string FullName { get; set; }
    public bool IsActivated { get; set; }

}
