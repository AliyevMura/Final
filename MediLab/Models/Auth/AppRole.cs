using Microsoft.AspNetCore.Identity;

namespace MediLab.Models.Auth;

public class AppRole:IdentityRole
{
    public bool IsActivated { get; set; }
}
