<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="centre">
        <h2>
            There be Treasure to be found!!</h2>
        <div id="distanceContainer">
            <h3>
                The distance to your next locations is:
            </h3>
            <h3><span id="distance">Calculating </span> meters</h3>
        </div>
        <div id="questionContainer">
            <h3>Quick answer the question!</h3>
            <p id="mistake"> That's not the correct answer!</p>
            <label for="answer"id="question">
                Your Answer
            </label>
            <input type="text" name="answer" id="answer" />
            <input type="button" value="Submit" id="submit" data-icon="check" />
        </div>
        <div id="correctContainer" class="centre">
            <h1>That was correct, onto the next question!</h1>  
            <input type="button" value="Next Question" id="next" data-icon="arrow-r" />
                  
        </div>
    </div>

    <script src="http://www.movable-type.co.uk/scripts/latlon.js" type="text/javascript"></script>
    <script src="/Scripts/hunt.js" type="text/javascript"></script>

</asp:Content>
