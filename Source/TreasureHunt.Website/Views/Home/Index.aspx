<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <div class="centre">
            <img src="/images/chest.png" />
            <h2>
                Treasure Hunt
            </h2>
            <p>
                Welcome to the byte night mobile treasure hunt.
            </p>
        </div>
        <h3>
            How to Play</h3>
        <ol>
            <li>The screen will show you a distance to the next location but no direction, you have
                to find it.</li>
            <li>Once you reach the location a question will automatically appear. Answer the question
                correctly to get the distance to the next location.</li>
            <li>Visit all 10 locations and answer all the question to find the treasure.</li>
            <li>Like all treasure hunts, those who do it the quickest get the treasure.</li>
        </ol>
        <div class="centre">
            <a href="/Play" data-role="button" data-icon="arrow-r">Play</a>
        </div>
        <h3>Tips</h3>
        <ol>
            <li>Jogging will get you there quicker</li>
            <li>Running will get you there even quicker</li>
            <li>Don't get distracted by a pub, beer won't help you win!</li>

        </ol>
    </div>
</asp:Content>
